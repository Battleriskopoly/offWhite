class Image < ActiveRecord::Base
  belongs_to :post
  mount_uploader :image, ImagesUploader
end
