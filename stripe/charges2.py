import stripe
stripe.api_key = "sk_test_OZ28Kmnx74fdqOePLY4feRgp"

charges = stripe.Charge.list(limit=3)
print(charges);
