class WelcomeController < ApplicationController
    def show
        render plain: "Hello from Rails!"
    end
end