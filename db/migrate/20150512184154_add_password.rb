class AddPassword < ActiveRecord::Migration
  create_table :posts do |t|
    t.text :body
    t.string :author
    t.string :title
    t.timestamps null: false
  end
  def change

    add_column :posts, :string, :password
  end
end
