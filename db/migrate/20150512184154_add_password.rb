class AddPassword < ActiveRecord::Migration
  def change
    add_column :posts, :string, :password
  end
end
