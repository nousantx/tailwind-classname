const margin = {
  ".m-0": "m-0px",
  ".mx-0": "ml-0px mr-0px",
  ".my-0": "mt-0px mb-0px",
  ".ms-0": "m-il-start-0px",
  ".me-0": "m-il-end-0px",
  ".mt-0": "mt-0px",
  ".mr-0": "mr-0px",
  ".mb-0": "mb-0px",
  ".ml-0": "ml-0px",
  ".m-px": "m-1px",
  ".mx-px": "ml-1px mr-1px",
  ".my-px": "mt-1px mb-1px",
  ".ms-px": "m-il-start-1px",
  ".me-px": "m-il-end-1px",
  ".mt-px": "mt-1px",
  ".mr-px": "mr-1px",
  ".mb-px": "mb-1px",
  ".ml-px": "ml-1px",
  ".m-0.5": "m-0.125rem",
  ".mx-0.5": "ml-0.125rem mr-0.125rem",
  ".my-0.5": "mt-0.125rem mb-0.125rem",
  ".ms-0.5": "m-il-start-0.125rem",
  ".me-0.5": "m-il-end-0.125rem",
  ".mt-0.5": "mt-0.125rem",
  ".mr-0.5": "mr-0.125rem",
  ".mb-0.5": "mb-0.125rem",
  ".ml-0.5": "ml-0.125rem",
  ".m-1": "m-0.25rem",
  ".mx-1": "ml-0.25rem mr-0.25rem",
  ".my-1": "mt-0.25rem mb-0.25rem",
  ".ms-1": "m-il-start-0.25rem",
  ".me-1": "m-il-end-0.25rem",
  ".mt-1": "mt-0.25rem",
  ".mr-1": "mr-0.25rem",
  ".mb-1": "mb-0.25rem",
  ".ml-1": "ml-0.25rem",
  ".m-1.5": "m-0.375rem",
  ".mx-1.5": "ml-0.375rem mr-0.375rem",
  ".my-1.5": "mt-0.375rem mb-0.375rem",
  ".ms-1.5": "m-il-start-0.375rem",
  ".me-1.5": "m-il-end-0.375rem",
  ".mt-1.5": "mt-0.375rem",
  ".mr-1.5": "mr-0.375rem",
  ".mb-1.5": "mb-0.375rem",
  ".ml-1.5": "ml-0.375rem",
  ".m-2": "m-0.5rem",
  ".mx-2": "ml-0.5rem mr-0.5rem",
  ".my-2": "mt-0.5rem mb-0.5rem",
  ".ms-2": "m-il-start-0.5rem",
  ".me-2": "m-il-end-0.5rem",
  ".mt-2": "mt-0.5rem",
  ".mr-2": "mr-0.5rem",
  ".mb-2": "mb-0.5rem",
  ".ml-2": "ml-0.5rem",
  ".m-2.5": "m-0.625rem",
  ".mx-2.5": "ml-0.625rem mr-0.625rem",
  ".my-2.5": "mt-0.625rem mb-0.625rem",
  ".ms-2.5": "m-il-start-0.625rem",
  ".me-2.5": "m-il-end-0.625rem",
  ".mt-2.5": "mt-0.625rem",
  ".mr-2.5": "mr-0.625rem",
  ".mb-2.5": "mb-0.625rem",
  ".ml-2.5": "ml-0.625rem",
  ".m-3": "m-0.75rem",
  ".mx-3": "ml-0.75rem mr-0.75rem",
  ".my-3": "mt-0.75rem mb-0.75rem",
  ".ms-3": "m-il-start-0.75rem",
  ".me-3": "m-il-end-0.75rem",
  ".mt-3": "mt-0.75rem",
  ".mr-3": "mr-0.75rem",
  ".mb-3": "mb-0.75rem",
  ".ml-3": "ml-0.75rem",
  ".m-3.5": "m-0.875rem",
  ".mx-3.5": "ml-0.875rem mr-0.875rem",
  ".my-3.5": "mt-0.875rem mb-0.875rem",
  ".ms-3.5": "m-il-start-0.875rem",
  ".me-3.5": "m-il-end-0.875rem",
  ".mt-3.5": "mt-0.875rem",
  ".mr-3.5": "mr-0.875rem",
  ".mb-3.5": "mb-0.875rem",
  ".ml-3.5": "ml-0.875rem",
  ".m-4": "m-1rem",
  ".mx-4": "ml-1rem mr-1rem",
  ".my-4": "mt-1rem mb-1rem",
  ".ms-4": "m-il-start-1rem",
  ".me-4": "m-il-end-1rem",
  ".mt-4": "mt-1rem",
  ".mr-4": "mr-1rem",
  ".mb-4": "mb-1rem",
  ".ml-4": "ml-1rem",
  ".m-5": "m-1.25rem",
  ".mx-5": "ml-1.25rem mr-1.25rem",
  ".my-5": "mt-1.25rem mb-1.25rem",
  ".ms-5": "m-il-start-1.25rem",
  ".me-5": "m-il-end-1.25rem",
  ".mt-5": "mt-1.25rem",
  ".mr-5": "mr-1.25rem",
  ".mb-5": "mb-1.25rem",
  ".ml-5": "ml-1.25rem",
  ".m-6": "m-1.5rem",
  ".mx-6": "ml-1.5rem mr-1.5rem",
  ".my-6": "mt-1.5rem mb-1.5rem",
  ".ms-6": "m-il-start-1.5rem",
  ".me-6": "m-il-end-1.5rem",
  ".mt-6": "mt-1.5rem",
  ".mr-6": "mr-1.5rem",
  ".mb-6": "mb-1.5rem",
  ".ml-6": "ml-1.5rem",
  ".m-7": "m-1.75rem",
  ".mx-7": "ml-1.75rem mr-1.75rem",
  ".my-7": "mt-1.75rem mb-1.75rem",
  ".ms-7": "m-il-start-1.75rem",
  ".me-7": "m-il-end-1.75rem",
  ".mt-7": "mt-1.75rem",
  ".mr-7": "mr-1.75rem",
  ".mb-7": "mb-1.75rem",
  ".ml-7": "ml-1.75rem",
  ".m-8": "m-2rem",
  ".mx-8": "ml-2rem mr-2rem",
  ".my-8": "mt-2rem mb-2rem",
  ".ms-8": "m-il-start-2rem",
  ".me-8": "m-il-end-2rem",
  ".mt-8": "mt-2rem",
  ".mr-8": "mr-2rem",
  ".mb-8": "mb-2rem",
  ".ml-8": "ml-2rem",
  ".m-9": "m-2.25rem",
  ".mx-9": "ml-2.25rem mr-2.25rem",
  ".my-9": "mt-2.25rem mb-2.25rem",
  ".ms-9": "m-il-start-2.25rem",
  ".me-9": "m-il-end-2.25rem",
  ".mt-9": "mt-2.25rem",
  ".mr-9": "mr-2.25rem",
  ".mb-9": "mb-2.25rem",
  ".ml-9": "ml-2.25rem",
  ".m-10": "m-2.5rem",
  ".mx-10": "ml-2.5rem mr-2.5rem",
  ".my-10": "mt-2.5rem mb-2.5rem",
  ".ms-10": "m-il-start-2.5rem",
  ".me-10": "m-il-end-2.5rem",
  ".mt-10": "mt-2.5rem",
  ".mr-10": "mr-2.5rem",
  ".mb-10": "mb-2.5rem",
  ".ml-10": "ml-2.5rem",
  ".m-11": "m-2.75rem",
  ".mx-11": "ml-2.75rem mr-2.75rem",
  ".my-11": "mt-2.75rem mb-2.75rem",
  ".ms-11": "m-il-start-2.75rem",
  ".me-11": "m-il-end-2.75rem",
  ".mt-11": "mt-2.75rem",
  ".mr-11": "mr-2.75rem",
  ".mb-11": "mb-2.75rem",
  ".ml-11": "ml-2.75rem",
  ".m-12": "m-3rem",
  ".mx-12": "ml-3rem mr-3rem",
  ".my-12": "mt-3rem mb-3rem",
  ".ms-12": "m-il-start-3rem",
  ".me-12": "m-il-end-3rem",
  ".mt-12": "mt-3rem",
  ".mr-12": "mr-3rem",
  ".mb-12": "mb-3rem",
  ".ml-12": "ml-3rem",
  ".m-14": "m-3.5rem",
  ".mx-14": "ml-3.5rem mr-3.5rem",
  ".my-14": "mt-3.5rem mb-3.5rem",
  ".ms-14": "m-il-start-3.5rem",
  ".me-14": "m-il-end-3.5rem",
  ".mt-14": "mt-3.5rem",
  ".mr-14": "mr-3.5rem",
  ".mb-14": "mb-3.5rem",
  ".ml-14": "ml-3.5rem",
  ".m-16": "m-4rem",
  ".mx-16": "ml-4rem mr-4rem",
  ".my-16": "mt-4rem mb-4rem",
  ".ms-16": "m-il-start-4rem",
  ".me-16": "m-il-end-4rem",
  ".mt-16": "mt-4rem",
  ".mr-16": "mr-4rem",
  ".mb-16": "mb-4rem",
  ".ml-16": "ml-4rem",
  ".m-20": "m-5rem",
  ".mx-20": "ml-5rem mr-5rem",
  ".my-20": "mt-5rem mb-5rem",
  ".ms-20": "m-il-start-5rem",
  ".me-20": "m-il-end-5rem",
  ".mt-20": "mt-5rem",
  ".mr-20": "mr-5rem",
  ".mb-20": "mb-5rem",
  ".ml-20": "ml-5rem",
  ".m-24": "m-6rem",
  ".mx-24": "ml-6rem mr-6rem",
  ".my-24": "mt-6rem mb-6rem",
  ".ms-24": "m-il-start-6rem",
  ".me-24": "m-il-end-6rem",
  ".mt-24": "mt-6rem",
  ".mr-24": "mr-6rem",
  ".mb-24": "mb-6rem",
  ".ml-24": "ml-6rem",
  ".m-28": "m-7rem",
  ".mx-28": "ml-7rem mr-7rem",
  ".my-28": "mt-7rem mb-7rem",
  ".ms-28": "m-il-start-7rem",
  ".me-28": "m-il-end-7rem",
  ".mt-28": "mt-7rem",
  ".mr-28": "mr-7rem",
  ".mb-28": "mb-7rem",
  ".ml-28": "ml-7rem",
  ".m-32": "m-8rem",
  ".mx-32": "ml-8rem mr-8rem",
  ".my-32": "mt-8rem mb-8rem",
  ".ms-32": "m-il-start-8rem",
  ".me-32": "m-il-end-8rem",
  ".mt-32": "mt-8rem",
  ".mr-32": "mr-8rem",
  ".mb-32": "mb-8rem",
  ".ml-32": "ml-8rem",
  ".m-36": "m-9rem",
  ".mx-36": "ml-9rem mr-9rem",
  ".my-36": "mt-9rem mb-9rem",
  ".ms-36": "m-il-start-9rem",
  ".me-36": "m-il-end-9rem",
  ".mt-36": "mt-9rem",
  ".mr-36": "mr-9rem",
  ".mb-36": "mb-9rem",
  ".ml-36": "ml-9rem",
  ".m-40": "m-10rem",
  ".mx-40": "ml-10rem mr-10rem",
  ".my-40": "mt-10rem mb-10rem",
  ".ms-40": "m-il-start-10rem",
  ".me-40": "m-il-end-10rem",
  ".mt-40": "mt-10rem",
  ".mr-40": "mr-10rem",
  ".mb-40": "mb-10rem",
  ".ml-40": "ml-10rem",
  ".m-44": "m-11rem",
  ".mx-44": "ml-11rem mr-11rem",
  ".my-44": "mt-11rem mb-11rem",
  ".ms-44": "m-il-start-11rem",
  ".me-44": "m-il-end-11rem",
  ".mt-44": "mt-11rem",
  ".mr-44": "mr-11rem",
  ".mb-44": "mb-11rem",
  ".ml-44": "ml-11rem",
  ".m-48": "m-12rem",
  ".mx-48": "ml-12rem mr-12rem",
  ".my-48": "mt-12rem mb-12rem",
  ".ms-48": "m-il-start-12rem",
  ".me-48": "m-il-end-12rem",
  ".mt-48": "mt-12rem",
  ".mr-48": "mr-12rem",
  ".mb-48": "mb-12rem",
  ".ml-48": "ml-12rem",
  ".m-52": "m-13rem",
  ".mx-52": "ml-13rem mr-13rem",
  ".my-52": "mt-13rem mb-13rem",
  ".ms-52": "m-il-start-13rem",
  ".me-52": "m-il-end-13rem",
  ".mt-52": "mt-13rem",
  ".mr-52": "mr-13rem",
  ".mb-52": "mb-13rem",
  ".ml-52": "ml-13rem",
  ".m-56": "m-14rem",
  ".mx-56": "ml-14rem mr-14rem",
  ".my-56": "mt-14rem mb-14rem",
  ".ms-56": "m-il-start-14rem",
  ".me-56": "m-il-end-14rem",
  ".mt-56": "mt-14rem",
  ".mr-56": "mr-14rem",
  ".mb-56": "mb-14rem",
  ".ml-56": "ml-14rem",
  ".m-60": "m-15rem",
  ".mx-60": "ml-15rem mr-15rem",
  ".my-60": "mt-15rem mb-15rem",
  ".ms-60": "m-il-start-15rem",
  ".me-60": "m-il-end-15rem",
  ".mt-60": "mt-15rem",
  ".mr-60": "mr-15rem",
  ".mb-60": "mb-15rem",
  ".ml-60": "ml-15rem",
  ".m-64": "m-16rem",
  ".mx-64": "ml-16rem mr-16rem",
  ".my-64": "mt-16rem mb-16rem",
  ".ms-64": "m-il-start-16rem",
  ".me-64": "m-il-end-16rem",
  ".mt-64": "mt-16rem",
  ".mr-64": "mr-16rem",
  ".mb-64": "mb-16rem",
  ".ml-64": "ml-16rem",
  ".m-72": "m-18rem",
  ".mx-72": "ml-18rem mr-18rem",
  ".my-72": "mt-18rem mb-18rem",
  ".ms-72": "m-il-start-18rem",
  ".me-72": "m-il-end-18rem",
  ".mt-72": "mt-18rem",
  ".mr-72": "mr-18rem",
  ".mb-72": "mb-18rem",
  ".ml-72": "ml-18rem",
  ".m-80": "m-20rem",
  ".mx-80": "ml-20rem mr-20rem",
  ".my-80": "mt-20rem mb-20rem",
  ".ms-80": "m-il-start-20rem",
  ".me-80": "m-il-end-20rem",
  ".mt-80": "mt-20rem",
  ".mr-80": "mr-20rem",
  ".mb-80": "mb-20rem",
  ".ml-80": "ml-20rem",
  ".m-96": "m-24rem",
  ".mx-96": "ml-24rem mr-24rem",
  ".my-96": "mt-24rem mb-24rem",
  ".ms-96": "m-il-start-24rem",
  ".me-96": "m-il-end-24rem",
  ".mt-96": "mt-24rem",
  ".mr-96": "mr-24rem",
  ".mb-96": "mb-24rem",
  ".ml-96": "ml-24rem",
  ".m-auto": "m-auto",
  ".mx-auto": "ml-auto mr-auto",
  ".my-auto": "mt-auto mb-auto",
  ".ms-auto": "m-il-start-auto",
  ".me-auto": "m-il-end-auto",
  ".mt-auto": "mt-auto",
  ".mr-auto": "mr-auto",
  ".mb-auto": "mb-auto",
  ".ml-auto": "ml-auto",
};
