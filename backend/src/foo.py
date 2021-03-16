import dateparser
from datetime import datetime
from pprint import pprint


patterns = [
    '2020-04-01',
    '2024-02-29',
    '2024-03-01',
    '2097-04-01',
    '2098-12-31',
    '1 years',
    '2 month',
    '3 days',
    '4 weeks',
]

settings = [
    {
        'PREFER_DATES_FROM': 'future',
        'RELATIVE_BASE': datetime(2020, 2, 3, 1, 23, 45),
    },
    {
        'PREFER_DATES_FROM': 'future',
        'RELATIVE_BASE': datetime(2020, 2, 3, 1, 23, 45),
        'DATE_ORDER': 'YMD',
    },
    {
        'PREFER_DATES_FROM': 'future',
        'RELATIVE_BASE': datetime(2020, 2, 3, 1, 23, 45),
        'DATE_ORDER': 'YMD',
        'PREFER_LOCALE_DATE_ORDER': False
    },
]

for sets in settings:
    print('--')
    pprint(sets)
    for pat in patterns:
        res = dateparser.parse(pat, settings=sets)
        print(f"'{pat}' -> {res}")
