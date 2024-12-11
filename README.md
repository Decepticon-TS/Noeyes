# Project Structure
automated-task-frontend/
│
├── backend/
│   ├── user_act_sim/
|   │   ├── __init__.py                         # Done                               
|   │   ├── api_server.py                       # Done
|   │   ├── config.py                           # Done
|   │   ├── core_simulation.py                  # Done
│   │   └── input_simulation.py                 # Done
│   ├── main.py                                 # Done
│   ├── readme.md                               # Done
│   └── requirements.txt                        # Done
├── src/app/
│   ├── (marketing)/
│   │   ├── layout.tsx                          # Needs to be implemented
│   │   ├── page.tsx                            # Done
│   │   └── service/page.tsx                    # Needs to be implemented
│   │
│   ├── (protected)/
│   │   ├── dashboard/page.tsx                  # Done
│   │   └── payments/page.tsx                   # Needs to be implemented
│   │
│   ├── api/
│   │   ├── backend/route.ts                    # Needs to be implemented
│   │   └── webhook/stripe/route.ts             # Done
│   │
│   ├── page.tsx                                # (IMP) Needs to be implemented
│   └── layout.tsx                              # (IMP) Needs to be implemented
│
├── src/components/
│   ├── layout/
│   │   ├── Header.tsx                          # Done
│   │   └── Footer.tsx                          # Done
│   │
│   ├── dashboard/
│   │   ├── ServiceControls.tsx                 # Needs to be implemented
│   │   └── ServiceStatus.tsx                   # Needs to be implemented
│   │
│   ├── payments/
│   │   ├── PricingTiers.tsx                    # Needs to be implemented
│   │   └── SubscriptionButton.tsx              # Needs to be implemented
│   │
│   └── ui/
│       ├── Button.tsx                          # Done
│       └── Card.tsx                            # Done
│
├── src/lib/
│   ├── api.ts # Needs to be implemented
│   ├── config.ts # Done
│   └── utils.ts # Needs to be implemented
│
├── src/hooks/
│   ├── useBackendService.ts # Done
│   └── useSubscription.ts # Needs to be implemented
│
├── public/
│   ├── images/
│   └── icons/
│
├── src/styles/
│   └── globals.css
│
├── package.json
├── tailwind.config.js
└── next.config.js