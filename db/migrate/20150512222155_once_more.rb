class OnceMore < ActiveRecord::Migration
  def change
    remove_column :tags, :key
    add_column :posts, :key, :string
  end
end
