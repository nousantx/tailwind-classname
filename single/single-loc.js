const singleLoc = {
  ".inset-0": "inset-0px",
  ".inset-x-0": "l-0px r-0px",
  ".inset-y-0": "t-0px b-0px",
  ".start-0": "inset-il-start-0px",
  ".end-0": "inset-il-end-0px",
  ".top-0": "t-0px",
  ".right-0": "r-0px",
  ".bottom-0": "b-0px",
  ".left-0": "l-0px",
  ".inset-px": "inset-1px",
  ".inset-x-px": "l-1px r-1px",
  ".inset-y-px": "t-1px b-1px",
  ".start-px": "inset-il-start-1px",
  ".end-px": "inset-il-end-1px",
  ".top-px": "t-1px",
  ".right-px": "r-1px",
  ".bottom-px": "b-1px",
  ".left-px": "l-1px",
  ".inset-0.5": "inset-0.125rem",
  ".inset-x-0.5": "l-0.125rem  r-0.125rem",
  ".inset-y-0.5": "t-0.125rem  b-0.125rem ",
  ".start-0.5": "inset-il-start-0.125rem",
  ".end-0.5": "inset-il-end-0.125rem",
  ".top-0.5": "t-0.125rem ",
  ".right-0.5": "r-0.125rem ",
  ".bottom-0.5": "b-0.125rem ",
  ".left-0.5": "l-0.125rem",
  ".inset-1": "inset-0.25rem",
  ".inset-x-1": "l-0.25rem  r-0.25rem",
  ".inset-y-1": "t-0.25rem  b-0.25rem ",
  ".start-1": "inset-il-start-0.25rem",
  ".end-1": "inset-il-end-0.25rem",
  ".top-1": "t-0.25rem ",
  ".right-1": "r-0.25rem ",
  ".bottom-1": "b-0.25rem ",
  ".left-1": "l-0.25rem",
  ".inset-1.5": "inset-0.375rem",
  ".inset-x-1.5": "l-0.375rem  r-0.375rem",
  ".inset-y-1.5": "t-0.375rem  b-0.375rem ",
  ".start-1.5": "inset-il-start-0.375rem",
  ".end-1.5": "inset-il-end-0.375rem",
  ".top-1.5": "t-0.375rem ",
  ".right-1.5": "r-0.375rem ",
  ".bottom-1.5": "b-0.375rem ",
  ".left-1.5": "l-0.375rem",
  ".inset-2": "inset-0.5rem",
  ".inset-x-2": "l-0.5rem  r-0.5rem",
  ".inset-y-2": "t-0.5rem  b-0.5rem ",
  ".start-2": "inset-il-start-0.5rem",
  ".end-2": "inset-il-end-0.5rem",
  ".top-2": "t-0.5rem ",
  ".right-2": "r-0.5rem ",
  ".bottom-2": "b-0.5rem ",
  ".left-2": "l-0.5rem",
  ".inset-2.5": "inset-0.625rem",
  ".inset-x-2.5": "l-0.625rem  r-0.625rem",
  ".inset-y-2.5": "t-0.625rem  b-0.625rem ",
  ".start-2.5": "inset-il-start-0.625rem",
  ".end-2.5": "inset-il-end-0.625rem",
  ".top-2.5": "t-0.625rem ",
  ".right-2.5": "r-0.625rem ",
  ".bottom-2.5": "b-0.625rem ",
  ".left-2.5": "l-0.625rem",
  ".inset-3": "inset-0.75rem",
  ".inset-x-3": "l-0.75rem  r-0.75rem",
  ".inset-y-3": "t-0.75rem  b-0.75rem ",
  ".start-3": "inset-il-start-0.75rem",
  ".end-3": "inset-il-end-0.75rem",
  ".top-3": "t-0.75rem ",
  ".right-3": "r-0.75rem ",
  ".bottom-3": "b-0.75rem ",
  ".left-3": "l-0.75rem",
  ".inset-3.5": "inset-0.875rem",
  ".inset-x-3.5": "l-0.875rem  r-0.875rem",
  ".inset-y-3.5": "t-0.875rem  b-0.875rem ",
  ".start-3.5": "inset-il-start-0.875rem",
  ".end-3.5": "inset-il-end-0.875rem",
  ".top-3.5": "t-0.875rem ",
  ".right-3.5": "r-0.875rem ",
  ".bottom-3.5": "b-0.875rem ",
  ".left-3.5": "l-0.875rem",
  ".inset-4": "inset-1rem",
  ".inset-x-4": "l-1rem  r-1rem",
  ".inset-y-4": "t-1rem  b-1rem ",
  ".start-4": "inset-il-start-1rem",
  ".end-4": "inset-il-end-1rem",
  ".top-4": "t-1rem ",
  ".right-4": "r-1rem ",
  ".bottom-4": "b-1rem ",
  ".left-4": "l-1rem",
  ".inset-5": "inset-1.25rem",
  ".inset-x-5": "l-1.25rem  r-1.25rem",
  ".inset-y-5": "t-1.25rem  b-1.25rem ",
  ".start-5": "inset-il-start-1.25rem",
  ".end-5": "inset-il-end-1.25rem",
  ".top-5": "t-1.25rem ",
  ".right-5": "r-1.25rem ",
  ".bottom-5": "b-1.25rem ",
  ".left-5": "l-1.25rem",
  ".inset-6": "inset-1.5rem",
  ".inset-x-6": "l-1.5rem  r-1.5rem",
  ".inset-y-6": "t-1.5rem  b-1.5rem ",
  ".start-6": "inset-il-start-1.5rem",
  ".end-6": "inset-il-end-1.5rem",
  ".top-6": "t-1.5rem ",
  ".right-6": "r-1.5rem ",
  ".bottom-6": "b-1.5rem ",
  ".left-6": "l-1.5rem",
  ".inset-7": "inset-1.75rem",
  ".inset-x-7": "l-1.75rem  r-1.75rem",
  ".inset-y-7": "t-1.75rem  b-1.75rem ",
  ".start-7": "inset-il-start-1.75rem",
  ".end-7": "inset-il-end-1.75rem",
  ".top-7": "t-1.75rem ",
  ".right-7": "r-1.75rem ",
  ".bottom-7": "b-1.75rem ",
  ".left-7": "l-1.75rem",
  ".inset-8": "inset-2rem",
  ".inset-x-8": "l-2rem  r-2rem",
  ".inset-y-8": "t-2rem  b-2rem ",
  ".start-8": "inset-il-start-2rem",
  ".end-8": "inset-il-end-2rem",
  ".top-8": "t-2rem ",
  ".right-8": "r-2rem ",
  ".bottom-8": "b-2rem ",
  ".left-8": "l-2rem",
  ".inset-9": "inset-2.25rem",
  ".inset-x-9": "l-2.25rem  r-2.25rem",
  ".inset-y-9": "t-2.25rem  b-2.25rem ",
  ".start-9": "inset-il-start-2.25rem",
  ".end-9": "inset-il-end-2.25rem",
  ".top-9": "t-2.25rem ",
  ".right-9": "r-2.25rem ",
  ".bottom-9": "b-2.25rem ",
  ".left-9": "l-2.25rem",
  ".inset-10": "inset-2.5rem",
  ".inset-x-10": "l-2.5rem  r-2.5rem",
  ".inset-y-10": "t-2.5rem  b-2.5rem ",
  ".start-10": "inset-il-start-2.5rem",
  ".end-10": "inset-il-end-2.5rem",
  ".top-10": "t-2.5rem ",
  ".right-10": "r-2.5rem ",
  ".bottom-10": "b-2.5rem ",
  ".left-10": "l-2.5rem",
  ".inset-11": "inset-2.75rem",
  ".inset-x-11": "l-2.75rem  r-2.75rem",
  ".inset-y-11": "t-2.75rem  b-2.75rem ",
  ".start-11": "inset-il-start-2.75rem",
  ".end-11": "inset-il-end-2.75rem",
  ".top-11": "t-2.75rem ",
  ".right-11": "r-2.75rem ",
  ".bottom-11": "b-2.75rem ",
  ".left-11": "l-2.75rem",
  ".inset-12": "inset-3rem",
  ".inset-x-12": "l-3rem  r-3rem",
  ".inset-y-12": "t-3rem  b-3rem ",
  ".start-12": "inset-il-start-3rem",
  ".end-12": "inset-il-end-3rem",
  ".top-12": "t-3rem ",
  ".right-12": "r-3rem ",
  ".bottom-12": "b-3rem ",
  ".left-12": "l-3rem",
  ".inset-14": "inset-3.5rem",
  ".inset-x-14": "l-3.5rem  r-3.5rem",
  ".inset-y-14": "t-3.5rem  b-3.5rem ",
  ".start-14": "inset-il-start-3.5rem",
  ".end-14": "inset-il-end-3.5rem",
  ".top-14": "t-3.5rem ",
  ".right-14": "r-3.5rem ",
  ".bottom-14": "b-3.5rem ",
  ".left-14": "l-3.5rem",
  ".inset-16": "inset-4rem",
  ".inset-x-16": "l-4rem  r-4rem",
  ".inset-y-16": "t-4rem  b-4rem ",
  ".start-16": "inset-il-start-4rem",
  ".end-16": "inset-il-end-4rem",
  ".top-16": "t-4rem ",
  ".right-16": "r-4rem ",
  ".bottom-16": "b-4rem ",
  ".left-16": "l-4rem",
  ".inset-20": "inset-5rem",
  ".inset-x-20": "l-5rem  r-5rem",
  ".inset-y-20": "t-5rem  b-5rem ",
  ".start-20": "inset-il-start-5rem",
  ".end-20": "inset-il-end-5rem",
  ".top-20": "t-5rem ",
  ".right-20": "r-5rem ",
  ".bottom-20": "b-5rem ",
  ".left-20": "l-5rem",
  ".inset-24": "inset-6rem",
  ".inset-x-24": "l-6rem  r-6rem",
  ".inset-y-24": "t-6rem  b-6rem ",
  ".start-24": "inset-il-start-6rem",
  ".end-24": "inset-il-end-6rem",
  ".top-24": "t-6rem ",
  ".right-24": "r-6rem ",
  ".bottom-24": "b-6rem ",
  ".left-24": "l-6rem",
  ".inset-28": "inset-7rem",
  ".inset-x-28": "l-7rem  r-7rem",
  ".inset-y-28": "t-7rem  b-7rem ",
  ".start-28": "inset-il-start-7rem",
  ".end-28": "inset-il-end-7rem",
  ".top-28": "t-7rem ",
  ".right-28": "r-7rem ",
  ".bottom-28": "b-7rem ",
  ".left-28": "l-7rem",
  ".inset-32": "inset-8rem",
  ".inset-x-32": "l-8rem  r-8rem",
  ".inset-y-32": "t-8rem  b-8rem ",
  ".start-32": "inset-il-start-8rem",
  ".end-32": "inset-il-end-8rem",
  ".top-32": "t-8rem ",
  ".right-32": "r-8rem ",
  ".bottom-32": "b-8rem ",
  ".left-32": "l-8rem",
  ".inset-36": "inset-9rem",
  ".inset-x-36": "l-9rem  r-9rem",
  ".inset-y-36": "t-9rem  b-9rem ",
  ".start-36": "inset-il-start-9rem",
  ".end-36": "inset-il-end-9rem",
  ".top-36": "t-9rem ",
  ".right-36": "r-9rem ",
  ".bottom-36": "b-9rem ",
  ".left-36": "l-9rem",
  ".inset-40": "inset-10rem",
  ".inset-x-40": "l-10rem  r-10rem",
  ".inset-y-40": "t-10rem  b-10rem ",
  ".start-40": "inset-il-start-10rem",
  ".end-40": "inset-il-end-10rem",
  ".top-40": "t-10rem ",
  ".right-40": "r-10rem ",
  ".bottom-40": "b-10rem ",
  ".left-40": "l-10rem",
  ".inset-44": "inset-11rem",
  ".inset-x-44": "l-11rem  r-11rem",
  ".inset-y-44": "t-11rem  b-11rem ",
  ".start-44": "inset-il-start-11rem",
  ".end-44": "inset-il-end-11rem",
  ".top-44": "t-11rem ",
  ".right-44": "r-11rem ",
  ".bottom-44": "b-11rem ",
  ".left-44": "l-11rem",
  ".inset-48": "inset-12rem",
  ".inset-x-48": "l-12rem  r-12rem",
  ".inset-y-48": "t-12rem  b-12rem ",
  ".start-48": "inset-il-start-12rem",
  ".end-48": "inset-il-end-12rem",
  ".top-48": "t-12rem ",
  ".right-48": "r-12rem ",
  ".bottom-48": "b-12rem ",
  ".left-48": "l-12rem",
  ".inset-52": "inset-13rem",
  ".inset-x-52": "l-13rem  r-13rem",
  ".inset-y-52": "t-13rem  b-13rem ",
  ".start-52": "inset-il-start-13rem",
  ".end-52": "inset-il-end-13rem",
  ".top-52": "t-13rem ",
  ".right-52": "r-13rem ",
  ".bottom-52": "b-13rem ",
  ".left-52": "l-13rem",
  ".inset-56": "inset-14rem",
  ".inset-x-56": "l-14rem  r-14rem",
  ".inset-y-56": "t-14rem  b-14rem ",
  ".start-56": "inset-il-start-14rem",
  ".end-56": "inset-il-end-14rem",
  ".top-56": "t-14rem ",
  ".right-56": "r-14rem ",
  ".bottom-56": "b-14rem ",
  ".left-56": "l-14rem",
  ".inset-60": "inset-15rem",
  ".inset-x-60": "l-15rem  r-15rem",
  ".inset-y-60": "t-15rem  b-15rem ",
  ".start-60": "inset-il-start-15rem",
  ".end-60": "inset-il-end-15rem",
  ".top-60": "t-15rem ",
  ".right-60": "r-15rem ",
  ".bottom-60": "b-15rem ",
  ".left-60": "l-15rem",
  ".inset-64": "inset-16rem",
  ".inset-x-64": "l-16rem  r-16rem",
  ".inset-y-64": "t-16rem  b-16rem ",
  ".start-64": "inset-il-start-16rem",
  ".end-64": "inset-il-end-16rem",
  ".top-64": "t-16rem ",
  ".right-64": "r-16rem ",
  ".bottom-64": "b-16rem ",
  ".left-64": "l-16rem",
  ".inset-72": "inset-18rem",
  ".inset-x-72": "l-18rem  r-18rem",
  ".inset-y-72": "t-18rem  b-18rem ",
  ".start-72": "inset-il-start-18rem",
  ".end-72": "inset-il-end-18rem",
  ".top-72": "t-18rem ",
  ".right-72": "r-18rem ",
  ".bottom-72": "b-18rem ",
  ".left-72": "l-18rem",
  ".inset-80": "inset-20rem",
  ".inset-x-80": "l-20rem  r-20rem",
  ".inset-y-80": "t-20rem  b-20rem ",
  ".start-80": "inset-il-start-20rem",
  ".end-80": "inset-il-end-20rem",
  ".top-80": "t-20rem ",
  ".right-80": "r-20rem ",
  ".bottom-80": "b-20rem ",
  ".left-80": "l-20rem",
  ".inset-96": "inset-24rem",
  ".inset-x-96": "l-24rem  r-24rem",
  ".inset-y-96": "t-24rem  b-24rem ",
  ".start-96": "inset-il-start-24rem",
  ".end-96": "inset-il-end-24rem",
  ".top-96": "t-24rem ",
  ".right-96": "r-24rem ",
  ".bottom-96": "b-24rem ",
  ".left-96": "l-24rem",
  ".inset-auto": "inset-auto",
  ".inset-1/2": "inset-50%",
  ".inset-1/3": "inset-33.333333%",
  ".inset-2/3": "inset-66.666667%",
  ".inset-1/4": "inset-25%",
  ".inset-2/4": "inset-50%",
  ".inset-3/4": "inset-75%",
  ".inset-full": "inset-100%",
  ".inset-x-auto": "l-auto r-auto",
  ".inset-x-1/2": "l-50% r-50%",
  ".inset-x-1/3": "l-33.333333% r-33.333333%",
  ".inset-x-2/3": "l-66.666667% r-66.666667%",
  ".inset-x-1/4": "l-25% r-25%",
  ".inset-x-2/4": "l-50% r-50%",
  ".inset-x-3/4": "l-75% r-75%",
  ".inset-x-full": "l-100% r-100%",
  ".inset-y-auto": "t-auto b-auto",
  ".inset-y-1/2": "t-50% b-50%",
  ".inset-y-1/3": "t-33.333333% b-33.333333%",
  ".inset-y-2/3": "t-66.666667% b-66.666667%",
  ".inset-y-1/4": "t-25% b-25%",
  ".inset-y-2/4": "t-50% b-50%",
  ".inset-y-3/4": "t-75% b-75%",
  ".inset-y-full": "t-100% b-100%",
  ".start-auto": "inset-il-start-auto",
  ".start-1/2": "inset-il-start-50%",
  ".start-1/3": "inset-il-start-33.333333%",
  ".start-2/3": "inset-il-start-66.666667%",
  ".start-1/4": "inset-il-start-25%",
  ".start-2/4": "inset-il-start-50%",
  ".start-3/4": "inset-il-start-75%",
  ".start-full": "inset-il-start-100%",
  ".end-auto": "inset-il-end-auto",
  ".end-1/2": "inset-il-end-50%",
  ".end-1/3": "inset-il-end-33.333333%",
  ".end-2/3": "inset-il-end-66.666667%",
  ".end-1/4": "inset-il-end-25%",
  ".end-2/4": "inset-il-end-50%",
  ".end-3/4": "inset-il-end-75%",
  ".end-full": "inset-il-end-100%",
  ".top-auto": "t-auto",
  ".top-1/2": "t-50%",
  ".top-1/3": "t-33.333333%",
  ".top-2/3": "t-66.666667%",
  ".top-1/4": "t-25%",
  ".top-2/4": "t-50%",
  ".top-3/4": "t-75%",
  ".top-full": "t-100%",
  ".right-auto": "r-auto",
  ".right-1/2": "r-50%",
  ".right-1/3": "r-33.333333%",
  ".right-2/3": "r-66.666667%",
  ".right-1/4": "r-25%",
  ".right-2/4": "r-50%",
  ".right-3/4": "r-75%",
  ".right-full": "r-100%",
  ".bottom-auto": "b-auto",
  ".bottom-1/2": "b-50%",
  ".bottom-1/3": "b-33.333333%",
  ".bottom-2/3": "b-66.666667%",
  ".bottom-1/4": "b-25%",
  ".bottom-2/4": "b-50%",
  ".bottom-3/4": "b-75%",
  ".bottom-full": "b-100%",
  ".left-auto": "l-auto",
  ".left-1/2": "l-50%",
  ".left-1/3": "l-33.333333%",
  ".left-2/3": "l-66.666667%",
  ".left-1/4": "l-25%",
  ".left-2/4": "l-50%",
  ".left-3/4": "l-75%",
  ".left-full": "l-100%",
};
