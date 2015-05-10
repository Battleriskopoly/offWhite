class AddFieldsToInquery < ActiveRecord::Migration
  def change
    add_column :inquiries, :description, :text
    add_column :inquiries, :name, :string
    add_column :inquiries, :email, :string
    add_column :inquiries, :phone, :string
  end
end
