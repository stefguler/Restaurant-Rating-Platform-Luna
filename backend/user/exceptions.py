from rest_framework import exceptions

def status_code_handler(exc, context):
    response = exceptions(exec, context)

    if response is not None and response.status_code == 403:
        response.status_code = 401

    return response