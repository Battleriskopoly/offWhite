class AddMainBlogPictureToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :main_blog_picture, :string
  end
end
