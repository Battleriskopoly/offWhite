class FixPassword < ActiveRecord::Migration
  def change
    remove_column :tags, :string
    add_column :tags, :password, :string
  end
end
