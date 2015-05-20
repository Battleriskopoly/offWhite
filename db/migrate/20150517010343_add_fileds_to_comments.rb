class AddFiledsToComments < ActiveRecord::Migration
  def change
    add_column :comments, :body, :text
    add_column :comments, :screen, :text
    add_column :comments, :post_id, :integer
  end
end
