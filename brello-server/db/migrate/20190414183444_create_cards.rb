class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.references :list, foreign_key: true
      t.string :name, null: false, default: ""
      t.integer :position, null: false

      t.timestamps
    end
  end
end
