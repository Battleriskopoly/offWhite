class StaticPages < ApplicationMailer
  def job(staticPage)
    @staticPage = staticPage
    @url = 'http://offfwhite.com/'
    mail(to: "ascottpedersen@gmail.com", subject: "You've got work!")
  end

end
