class AddFieldsTo < ActiveRecord::Migration
  def change
    remove_column :inquiries, :description, :text
    remove_column :inquiries, :name, :string
    remove_column :inquiries, :email, :string
    remove_column :inquiries, :phone, :string
    add_column :static_pages, :description, :text
    add_column :static_pages, :name, :string
    add_column :static_pages, :email, :string
    add_column :static_pages, :phone, :string
  end
end
