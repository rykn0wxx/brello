class CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]
  before_action :authenticate_user
  skip_before_action :verify_authenticity_token

  # PATCH /boards/:board_id/lists/:list_id/cards/:id/move
  def move
    @card = Card.find(params[:id])
    @card.insert_at(card_params[:position].to_i)
    render json: @card.to_json(:except => [:created_at, :updated_at])
  end

  # GET /cards
  def index
    @cards = Card.all

    render json: @cards
  end

  # GET /cards/1
  def show
    render json: @card
  end

  # POST /cards
  def create
    @card = Card.new(card_params)

    if @card.save
      render json: @card, status: :created, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cards/1
  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cards/1
  def destroy
    @card.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card
      @card = Card.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def card_params
      params.require(:card).permit(:list_id, :name, :position)
    end
end
