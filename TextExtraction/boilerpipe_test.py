# Boilerpipe python wrapper package
from boilerpipe.extract import Extractor
import pprint

# Extractor object, input extraction method and html parameters
extractor = Extractor('ArticleExtractor', url = 
                      "https://www.smithsonianmag.com/smart-news/new-planet-hunting-satellite-ready-launch-180968804/")

raw_text = extractor.getText()

print(raw_text)