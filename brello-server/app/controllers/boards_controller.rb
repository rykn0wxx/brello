class BoardsController < ApplicationController
  before_action :set_board, only: [:update, :destroy]
  before_action :authenticate_user
  skip_before_action :verify_authenticity_token

  # PATCH /boards/:id/move
  def move
    @board = current_user.boards.where(:id => params[:id])
    @board.insert_at(board_params[:position].to_i)
    @boards = current_user.boards.order(:position => :asc)
    render json: @boards.to_json(:except => [:created_at, :updated_at])
  end

  # GET /boards
  def index
    @boards = current_user.boards.order(:position => :asc)
    render json: @boards.to_json(:except => [:created_at, :updated_at])
  end

  # GET /boards/1
  def show
    @board = current_user.boards.includes(:lists).where(:id => params[:id])
    render json: @board.to_json(:include => :lists, :except => [:created_at, :updated_at])
  end

  # POST /boards
  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board.to_json(:except => [:created_at, :updated_at]), status: :created, location: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boards/1
  def update
    if @board.update(board_params)
      render json: @board
    else
      render json: @board.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boards/1
  def destroy
    @board.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_board
      @board = Board.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def board_params
      params.require(:board).permit(:user_id, :name, :position)
    end
end
