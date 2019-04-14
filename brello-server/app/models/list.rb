# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  position   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  board_id   :integer
#
# Indexes
#
#  index_lists_on_board_id  (board_id)
#

class List < ApplicationRecord
  belongs_to :board
  acts_as_list scope: :board
  
  has_many :cards, dependent: :destroy

  validates :name, presence: true
end
