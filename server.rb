#!/usr/bin/env ruby
# frozen_string_literal: true

require 'webrick'

dir = File.dirname(File.expand_path(__FILE__))
port = (ARGV[0] || 3000).to_i
bind = '127.0.0.1'

server = WEBrick::HTTPServer.new(
  Port: port,
  BindAddress: bind,
  DocumentRoot: dir,
  AccessLog: [],
  Logger: WEBrick::Log.new($stderr, WEBrick::BasicLog::INFO),
)

trap('INT')  { server.shutdown }
trap('TERM') { server.shutdown }

puts ''
puts "  OK: http://localhost:#{port}/"
puts "  （Firebase 用: http://#{bind}:#{port}/ も可）"
puts "  フォルダ: #{dir}"
puts "  終了: Ctrl+C"
puts ''

server.start
