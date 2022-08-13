# Based on https://github.com/jekyll/minima/blob/master/minima.gemspec

Gem::Specification.new do |spec|
  spec.name     = "website"
  spec.version  = "2.5.1"
  spec.authors  = ["Luqaska"]
  spec.email    = []

  spec.summary  = "My website"
  spec.homepage = "https://atico.ga"
  spec.license  = ""

  spec.metadata["plugin_type"] = "theme"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r!^(assets|_(includes|layouts|sass)/|(LICENSE|README)((\.(txt|md|markdown)|$)))!i)
  end

  spec.add_runtime_dependency "jekyll", ">= 3.5", "< 5.0"

  spec.add_development_dependency "bundler"
end
