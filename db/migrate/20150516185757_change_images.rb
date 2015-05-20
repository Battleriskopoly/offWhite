class ChangeImages < ActiveRecord::Migration
  def change
    add_column :posts, :blogImages, :json
  end
end
