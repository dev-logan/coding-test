import re
from collections import Counter

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]

print(Counter([word for word in re.sub(r'[^\w]', ' ',
      paragraph).lower().split() if word not in banned]).most_common(1)[0][0])
