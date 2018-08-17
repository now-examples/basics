#!/bin/sh
export RAILS_ENV=production
export RAKE_ENV=production
export SECRET_KEY_BASE=$(bundle exec rake secret)
bundle exec rails s -p 3000 -b 0.0.0.0
