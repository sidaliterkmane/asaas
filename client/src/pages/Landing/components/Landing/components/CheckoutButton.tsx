import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

import { TbCardsFilled } from "react-icons/tb";

const publicStripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const testPublicStripeKey = import.meta.env.VITE_TEST_STRIPE_PUBLISHABLE_KEY;

const deckIcon = <TbCardsFilled className="icon" color="white" size={"25px"} />;

interface CheckoutButtonProps {
  containsIcon: boolean,
  icon: any,
  content: string,
  width: string,
  height: string,
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ containsIcon, icon, content, width, height }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripePromise = await loadStripe(testPublicStripeKey);
    try {
      const response = await fetch(
        "http://localhost:3000/api/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();
      const { error } =
        (await stripePromise?.redirectToCheckout({
          sessionId: session.id,
        })) || {};

      if (error) {
        console.error(error);
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      style={{ width, height }}
      className={`
        checkout-button
        border border-neutral-800 bg-neutral-900
        px-4
        p-2
        rounded-lg
        transition
        flex
        gap-2
        justify-center
        items-center hover:brightness-105
        `} 
    >
      {loading ? (
        <div
          className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          {containsIcon && <div className="flex justify-center items-center">{ icon }</div>}
          <p className="text-sm font-extralight">{ content }</p>
        </div>
      )}
    </button>
  );
};

export default CheckoutButton;
