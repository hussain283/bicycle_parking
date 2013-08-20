source 'https://rubygems.org'
ruby '1.9.3'

gem 'rails', '3.2.13'
gem 'pg'

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'figaro'
gem 'haml-rails'
gem 'haml_ejs'
gem 'json'
gem 'backbone-on-rails'
gem 'geocoder'

group :development do
  gem 'better_errors'
  gem 'binding_of_caller', :platforms=>[:mri_19, :rbx]
  gem 'html2haml'
  gem 'quiet_assets'
end
group :development, :test do
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'jasmine'
  gem 'jasmine-rails'
  gem 'shoulda-matchers'
  gem 'pry'
end
group :production do
  gem 'thin'
end
group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'email_spec'
end
