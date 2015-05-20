class OneMore < ActiveRecord::Migration
  def change
    remove_column :tags, :key
    add_column :tags, :key, :string
  end
end
