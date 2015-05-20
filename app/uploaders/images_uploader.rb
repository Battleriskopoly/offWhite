# encoding: utf-8

class ImagesUploader < CarrierWave::Uploader::Base
  storage :file
end
