class AddFieldasComments < ActiveRecord::Migration
  def change
    remove_column :comments, :screen
    add_column :comments, :user_id, :integer
  end
end
