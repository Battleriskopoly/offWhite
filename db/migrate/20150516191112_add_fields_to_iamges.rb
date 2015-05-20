class AddFieldsToIamges < ActiveRecord::Migration
  def change
    add_column :images, :image, :string
    add_column :images, :post_id, :integer
  end
end
