// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import '@openzeppelin/contracts/access/AccessControl.sol';
import './interfaces/IToken.sol';

/**
 * @title EcoEarn Contract
 * @dev This contract manages a reward system based on cycles. Participants can make valid submissions to earn rewards.
 */
contract EcoEarn is AccessControl {
    IToken public token;

    address owner;

    struct Course{
        address creator;
        string name;
        address[] participants;
    }

    struct Learner{
        string[] interests;
        bool identity;
        string[] coursesTaken;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Caller is not the owner");
        _;
    }

    mapping(address => string[]) public creators;

    mapping(address => Learner) public learners;

    Course[] public courses;

    // Events
    event CourseRegistered(string name);

        // Events
    event LearnerRegistered(string message);

            // Events
    event CreatorRegistered(string message);

    constructor(address _token) {
        owner = msg.sender;
        token = IToken(_token);
    }

    function registerCourse(address creator, string memory name) public onlyOwner {
      address[] memory participants;
       courses.push(Course({
        creator: creator,
        name: name,
        participants: participants
       }));

       emit CourseRegistered(name);
    }

   function registerNewLearner(address learner,string[] memory interests, bool identity) public onlyOwner {
       string[] memory coursesTaken;
       learners[learner] = Learner({
       interests: interests,
       identity: identity,
       coursesTaken: coursesTaken
       });

       emit LearnerRegistered("A new learner registered");
    }

    function registerNewCreator(address creator,string[] memory specialities) public onlyOwner {
       creators[creator] = specialities;
       emit CreatorRegistered("A new creator registered");
    }

   
    function setToken(address _token) external onlyRole(DEFAULT_ADMIN_ROLE) {
        token = IToken(_token);
    }

}
