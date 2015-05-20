class Post < ActiveRecord::Base
  mount_uploader :main_blog_picture, MainBlogPictureUploader
  has_many :images
  has_many :comments
  has_many :users
  accepts_nested_attributes_for :images
  has_and_belongs_to_many :tags
  accepts_nested_attributes_for :tags
  validates :facebook, presence: true
  validates :twitter, presence: true
  validates :googlePlus, presence: true
  validates :pinterest, presence: true
  validates :email, presence: true
end
