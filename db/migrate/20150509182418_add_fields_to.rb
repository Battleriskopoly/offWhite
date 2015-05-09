class AddFieldsTo < ActiveRecord::Migration
  def change
    add_column :static_pages, :description, :text
    add_column :static_pages, :name, :string
    add_column :static_pages, :email, :string
    add_column :static_pages, :phone, :string
  end
end
