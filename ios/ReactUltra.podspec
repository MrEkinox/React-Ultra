require 'json'

package = JSON.parse(File.read('../package.json'))

Pod::Spec.new do |s|
  s.name         = 'ReactUltra'
  s.version      = package['version']
  s.summary      = package['description']
  s.homepage     = package['homepage']
  s.license      = package['license']
  s.author       = package['author']
  s.platforms    = { ios: '9.0' }
  s.swift_version = '5.0'
  s.source       = { git: 'https://github.com/MrEkinox/React-Ultra', tag: 'master' }
  s.source_files = '*.{h,m}'
  s.requires_arc = true
  s.dependency 'React'
end
