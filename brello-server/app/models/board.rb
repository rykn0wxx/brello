# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  position   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
# Indexes
#
#  index_boards_on_user_id  (user_id)
#

class Board < ApplicationRecord
  belongs_to :user
  acts_as_list
  has_many :lists, dependent: :destroy

  validates :name, presence: true
end
