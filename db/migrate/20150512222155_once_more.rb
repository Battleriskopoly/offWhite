class OnceMore < ActiveRecord::Migration
  def change
    add_column :posts, :key, :string
  end
end
