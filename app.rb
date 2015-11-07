require 'sinatra'
require 'json'

configure do
	set :bookmarks, JSON.parse(File.open('data/bookmarks.json').read)
end

get '/bookmarks' do
	content_type 'application/json'

	keyword = params['keyword']
	if keyword then
		settings.bookmarks.select do |bookmark| 
			bookmark["title"].downcase.include? keyword.downcase
		end.to_json
	else
		settings.bookmarks.to_json
	end
end

get '/' do 
	File.open('public/index.html')
end