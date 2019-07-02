Handler = Proc.new do |req, res|
  res.status = 200
  res['Content-Type'] = 'text/plain'
  res.body = Time.now.strftime('%Y-%m-%dT%H:%M:%S.%L%z')
end