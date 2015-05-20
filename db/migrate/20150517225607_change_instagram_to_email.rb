class ChangeInstagramToEmail < ActiveRecord::Migration
  def change
    add_column :posts, :email, :string
  end
end
