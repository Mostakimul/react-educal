import React from 'react';
import OverviewCard from '../OverviewCard/OverviewCard';

const Overview = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mx-auto">
        <h2 className="font-bold text-4xl pt-5">
          Why An Scholercity <br /> Out Of The Ordinary
        </h2>
        <p className="w-2/4 mx-auto">
          You don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-4 gap-4 my-4">
        <OverviewCard
          className="bg-blue-600"
          title="4,000 Online courses"
          description="Arse over tit morish wind up grormless butty!"
          ImBook="ImBook"
        ></OverviewCard>
        <OverviewCard
          className="bg-pink-600"
          title="Job plcament support"
          description="Arse over tit morish wind up grormless butty!"
          ImMug="ImMug"
        ></OverviewCard>
        <OverviewCard
          className="bg-yellow-600"
          title="Lifetime Slack chat support"
          description="Arse over tit morish wind up grormless butty!"
          ImAccessibility="ImAccessibility"
        ></OverviewCard>
        <OverviewCard
          className="bg-green-600"
          title="Research and innovation"
          description="Arse over tit morish wind up grormless butty!"
          ImLeaf="ImLeaf"
        ></OverviewCard>
      </div>
    </div>
  );
};

export default Overview;
