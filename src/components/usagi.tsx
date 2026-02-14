'use client';

// Temporarily disabled due to three.js version incompatibility with drei/Bvh
// This is a pre-existing issue not related to the website transformation changes

export function Usagi3D() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold text-center mb-2 text-yellow-600 dark:text-yellow-400">
        3D Component
      </h2>
      <div className="h-[50vh] w-full relative flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
        <p className="text-muted-foreground text-center max-w-md px-4">
          3D showcase component temporarily disabled due to three.js version compatibility issue.
          <br />
          <span className="text-sm mt-2 block">
            (Pre-existing issue, not related to current changes)
          </span>
        </p>
      </div>
    </div>
  );
}
