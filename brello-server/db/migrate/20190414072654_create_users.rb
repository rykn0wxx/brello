class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email,              null: false, default: ""
      t.string :username,           null: false, default: ""
      t.boolean :admin,             default: false
      t.string :password_digest,    null: false, default: ""

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
  end
end
