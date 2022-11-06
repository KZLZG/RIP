dictit = {
        'orders': [
            {'title': 'Масло моторное машинное', 'id': 1, 'description': 'Лучшее масло для машин'},
            {'title': 'Масло лодочное', 'id': 2, 'description': 'Лучшее масло для лодок'},
            {'title': 'Антифриз', 'id': 3, 'description': 'Лучший антифриз'},
        ]
    }

# for item in dictit.get('orders'):
#     print(item.get('title'))



for item in dictit['orders']:
    print(item['title'])