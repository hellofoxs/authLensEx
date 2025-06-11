import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const ElementLight = (): JSX.Element => {
  // Navigation tab data
  const navigationTabs = [
    { name: "General", icon: "/icon-2.svg" },
    { name: "Devices", icon: "/icon-3.svg" },
    { name: "License keys", icon: "/icon-4.svg" },
    { name: "Subscriptions", icon: "/icon-1.svg" },
    { name: "Shareable links", icon: "/icon.svg" },
  ];

  return (
    <main className="flex flex-col min-h-[900px] items-start relative bg-black">
      <section className="flex flex-col h-[715.35px] items-start relative self-stretch w-full">
        <img
          className="absolute w-full h-[715px] top-0 left-0 object-cover"
          alt="Background image"
          src="/image.png"
        />

        <div className="flex flex-col items-center justify-center p-16 relative flex-1 self-stretch w-full">
          <div className="flex flex-col max-w-[820px] w-[820px] items-start relative flex-1">
            <Card className="flex flex-col items-start p-px relative self-stretch w-full flex-[0_0_auto] bg-black rounded-xl overflow-hidden border border-solid border-[#ffffff2e] shadow-[0px_0px_20px_10px_#00000066] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)]">
              <div className="absolute w-[822px] h-[531px] -top-px -left-px rounded-xl border border-solid border-[#00000088]" />

              {/* Window control buttons */}
              <div className="flex w-[52px] items-start gap-2 absolute top-[23px] left-6 z-10">
                <div className="relative w-3 h-3 bg-[#ff5f56] rounded-md" />
                <div className="relative w-3 h-3 bg-[#2f3033] rounded-md" />
                <div className="relative w-3 h-3 bg-[#2f3033] rounded-md" />
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                {/* Navigation tabs */}
                <Tabs defaultValue="General" className="w-full">
                  <TabsList className="flex items-center justify-start gap-1 pt-2.5 pb-[11px] px-10 relative self-stretch w-full h-auto flex-[0_0_auto] bg-[#ffffff05] border-b border-[#ffffff0e] overflow-x-scroll opacity-30 rounded-none">
                    {navigationTabs.map((tab) => (
                      <TabsTrigger
                        key={tab.name}
                        value={tab.name}
                        className="inline-flex flex-col items-center gap-2 p-3 relative flex-[0_0_auto] rounded-md data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                      >
                        <div className="inline-flex flex-col items-start pt-0 pb-1 px-0 relative flex-[0_0_auto]">
                          <div className="relative max-w-[22px] w-[22px] max-h-[22px] h-[22px] overflow-hidden">
                            <img
                              className="absolute w-[22px] h-[26px] -top-0.5 left-0"
                              alt={`${tab.name} icon`}
                              src={tab.icon}
                            />
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto] opacity-55">
                          <div className="relative w-fit mt-[-1.00px] font-medium text-white text-xs tracking-[0] leading-[16.0px] whitespace-nowrap overflow-hidden text-ellipsis">
                            {tab.name}
                          </div>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                <CardContent className="flex flex-col items-start p-10 relative self-stretch w-full flex-[0_0_auto] mt-[-1.42e-14px] overflow-scroll">
                  <div className="flex flex-col items-center justify-center gap-8 pt-0 pb-8 px-0 relative self-stretch w-full flex-[0_0_auto]">
                    {/* Logo and title section */}
                    <div className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                        <div className="relative max-w-14 w-14 max-h-14 h-14 bg-[url(/logo-transparent-681d19be-png.png)] bg-cover bg-[50%_50%]" />
                      </div>

                      <div className="inline-flex flex-col items-center justify-center gap-1 relative flex-[0_0_auto]">
                        <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                          <h1 className="relative w-fit mt-[-1.00px] font-medium text-white text-xl text-center tracking-[0] leading-[25px] whitespace-nowrap">
                            Screen Studio dashboard
                          </h1>
                        </div>

                        <div className="inline-flex flex-col items-center relative flex-[0_0_auto] opacity-55">
                          <p className="relative w-fit mt-[-1.00px] font-medium text-white text-xs text-center tracking-[0] leading-[16.0px] whitespace-nowrap overflow-hidden text-ellipsis">
                            Please enter your email address to continue
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Email form section */}
                    <div className="flex flex-col max-w-xs w-80 items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-[7.47px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <Input
                            className="h-[38px] bg-[#1d212a] rounded-md border-[#252935] font-medium text-[#757575] text-[13px]"
                            placeholder="Email address..."
                          />

                          <Button className="h-[38px] w-full rounded-md bg-[url(/svg.svg)] bg-[100%_100%] flex items-center justify-center">
                            <div className="relative w-[74.02px] h-[19.5px] mt-[-5.75px] mb-[-5.75px] flex items-center">
                              <span className="font-medium text-white text-[13px] text-center tracking-[-0.24px] leading-[19.5px] whitespace-nowrap">
                                Continue
                              </span>
                              <span className="ml-2 font-normal text-white text-xs tracking-[-0.24px] leading-[16.0px] whitespace-nowrap">
                                ⏎
                              </span>
                            </div>
                          </Button>
                        </div>

                        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                          <p className="relative self-stretch mt-[-1.00px] font-medium text-[#ffffff4c] text-xs text-center tracking-[0] leading-[16.0px]">
                            <span className="font-medium text-[#ffffff4c] text-xs tracking-[0] leading-[16.0px]">
                              By continuing, you agree to the{" "}
                            </span>
                            <span className="underline">Terms of Service</span>
                            <span className="font-medium text-[#ffffff4c] text-xs tracking-[0] leading-[16.0px]">
                              {" "}
                              and
                              <br />
                            </span>
                            <span className="underline">Privacy Policy</span>
                            <span className="font-medium text-[#ffffff4c] text-xs tracking-[0] leading-[16.0px]">
                              .
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact info section */}
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative w-fit mt-[-1.00px] font-medium text-[#ffffff4c] text-xs tracking-[0] leading-[16.0px] whitespace-nowrap overflow-hidden text-ellipsis">
                          <span className="font-medium text-[#ffffff4c] text-xs tracking-[0] leading-[16.0px]">
                            In case of any issues, please contact us at{" "}
                          </span>
                          <span className="underline">team@screen.studio</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer section */}
        <footer className="flex items-center gap-2 px-5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#08090db2]">
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative max-w-6 w-6 max-h-6 h-6 bg-[url(/logo-transparent-681d19be-png-1.png)] bg-cover bg-[50%_50%]" />
            </div>
          </div>

          <Button
            variant="ghost"
            className="h-[38px] px-[13px] py-[15px] text-white"
          >
            <span className="font-medium text-white text-[13px] text-center tracking-[-0.24px] leading-[19.5px] whitespace-nowrap">
              Return to homepage
            </span>
          </Button>

          <div className="relative flex-1 grow h-px" />
        </footer>
      </section>
    </main>
  );
};
