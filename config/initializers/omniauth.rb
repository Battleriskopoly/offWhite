OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '853107841251-21osbc1leo17bnqob39et6h18u3b4gnf.apps.googleusercontent.com', '-Z-iDyeBlFjuiUR63PNQHYLI', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end