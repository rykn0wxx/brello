# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  position   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  list_id    :integer
#
# Indexes
#
#  index_cards_on_list_id  (list_id)
#

class Card < ApplicationRecord
  belongs_to :list
  acts_as_list scope: :list

  validates :name, presence: true
end
