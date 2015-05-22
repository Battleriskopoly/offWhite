class StaticPagesController < ApplicationController
  def index
    greetingList = ["Hia","Howdy", "Hey", "Welcome", "Konichiwa", "Yo", "Greetings", "Hello", "Salutations","Ní hâo",
    "Bonjour"]
    @greeting = greetingList[rand(0..10)]
    @styleSheet = "static_pages"
    @staticPage = StaticPage.new()
  end

  def create
    @staticPage = StaticPage.new(static_pages_params)
    if @staticPage.save
      StaticPages.job(@staticPage).deliver_now
      redirect_to root_url
    end
  end

  private
  def static_pages_params
    params.require(:static_page).permit(:name, :email, :phone, :description)
  end
end
