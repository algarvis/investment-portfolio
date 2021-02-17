import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def test(request):

    url = 'https://api.tiingo.com/tiingo/daily/aapl/prices'

    response = requests.get(
        url,
        params={
            'startDate': '2012-1-1',
            'endDate': '2012-2-1',
            'resampleFreq': 'daily'
        },
        headers={'Authorization': 'Token c6918050a236d3b58bdac32702a0bd6468b831e8'},
    )

    if response:
        print('Success!')

        print(response.json())

    else:
        print('An error has occurred.')

    return Response({'count': 22}, status=200)


# print(test())
