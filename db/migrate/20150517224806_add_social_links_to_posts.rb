class AddSocialLinksToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :twitter, :string
    add_column :posts, :facebook, :string
    add_column :posts, :googlePlus, :string
    add_column :posts, :pinterest, :string
    add_column :posts, :instagram, :string
  end
end
