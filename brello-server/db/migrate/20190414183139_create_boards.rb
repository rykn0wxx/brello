class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.references :user, foreign_key: true
      t.string :name, null: false, default: ""
      t.integer :position, null: false

      t.timestamps
    end
  end
end
