class FixPasswordAgain < ActiveRecord::Migration
  def change
    remove_column :tags, :password
    add_column :tags, :key, :string
  end
end
